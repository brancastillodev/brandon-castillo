import { useCallback, useEffect, useRef, useState } from "react";

// mínimo de px desde el borde superior para considerar una sección activa
const MIN_ACTIVATION_OFFSET = 120;
// proporción del alto de la ventana: en pantallas altas una línea fija hace
// que las últimas secciones (charts/contacto) nunca lleguen a activarse
const ACTIVATION_RATIO = 0.35;

// gestos que indican que el usuario volvió a scrollear a mano
const USER_SCROLL_EVENTS = ["wheel", "touchmove", "keydown"] as const;

// secciones que deben activarse un poco antes de llegar a la línea:
// charts es corta y el highlight quedaba demasiado tiempo en proyectos
const ACTIVATION_LEAD: Record<string, number> = {
  charts: 120,
};

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState("");
  // al hacer click en un link fijamos esa sección hasta que el usuario
  // vuelva a scrollear, si no el scroll al fondo la pisa (ej: charts -> contacto)
  const lockedRef = useRef(false);

  const activate = useCallback((id: string) => {
    lockedRef.current = true;
    setActiveId(id);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      if (lockedRef.current) return;

      const line = Math.max(
        MIN_ACTIVATION_OFFSET,
        window.innerHeight * ACTIVATION_RATIO
      );

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      const lastId = elements[elements.length - 1]?.id;

      // al llegar al final, la última sección queda activa aunque sea corta
      if (atBottom && lastId) {
        setActiveId(lastId);
        return;
      }

      let currentId = "";
      for (const el of elements) {
        const top =
          el.getBoundingClientRect().top - (ACTIVATION_LEAD[el.id] ?? 0);
        if (top > line) break;
        currentId = el.id;
      }
      setActiveId(currentId);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const unlock = () => {
      lockedRef.current = false;
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    for (const event of USER_SCROLL_EVENTS) {
      window.addEventListener(event, unlock, { passive: true });
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      for (const event of USER_SCROLL_EVENTS) {
        window.removeEventListener(event, unlock);
      }
    };
  }, [sectionIds]);

  return { activeId, activate };
}
