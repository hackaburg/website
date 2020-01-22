import styled from "@emotion/styled";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "./use-event-listener";

interface IMarker {
  name: string;
  ref: React.RefObject<HTMLAnchorElement | null>;
}

interface IContainer {
  value: IMarker;
}

const items: IContainer[] = [];

const useArrayItem = (initialValue: IMarker) => {
  const ref = useRef<IContainer>({
    value: initialValue,
  });

  useEffect(() => {
    items.push(ref.current);
    return () => {
      const index = items.findIndex((item) => item === ref.current);

      if (index !== -1) {
        items.splice(index, 1);
      }
    };
  }, []);

  return ref.current;
};

const Marker = styled.a`
  position: relative;
  top: -5rem;
`;

export const useScrollSpyMarker = (name: string) => {
  const ref = useRef(null);
  const marker = <Marker id={name} ref={ref} />;

  useArrayItem({
    name,
    ref,
  });

  return marker;
};

interface HistoryState {
  url?: string;
}

const updateHash = (hash: string) => {
  const state = (history.state || {}) as HistoryState;

  if (state.url !== hash) {
    state.url = hash;
    history.replaceState(state, "", hash);
  }
};

const findActiveMarkerName = (): string | null => {
  if (items.length === 0) {
    return null;
  }

  const currentPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  const markerPositions = items
    .map((marker) => {
      if (marker.value.ref.current == null) {
        return {
          name: marker.value.name,
          top: -1,
        };
      }

      const rect = marker.value.ref.current.getBoundingClientRect();

      return {
        name: marker.value.name,
        top: rect.top + window.scrollY - 200,
      };
    })
    .reverse()
    .filter((position) => position.top < currentPosition);

  if (markerPositions.length === 0) {
    return null;
  }

  return markerPositions[0]!.name;
};

const findActiveMarkerAndUpdateHash = () => {
  const marker = findActiveMarkerName();
  const hash = `#${marker ?? ""}`;
  updateHash(hash);
  return marker;
};

export const useScrollSpyActiveElementName = (): string | null => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const updateActiveElement = useCallback(
    () => setActiveMarker(findActiveMarkerAndUpdateHash()),
    [],
  );

  useEventListener("scroll", updateActiveElement);

  return activeMarker;
};
