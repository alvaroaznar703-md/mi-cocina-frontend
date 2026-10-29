import { create } from "zustand";

export const useRecetasStore = create((set) => ({
  favoritos: [],

  agregarRecetaFavorita: (receta) =>
    set((state) => ({
      favoritos: [...state.favoritos, receta],
    })),

  eliminarRecetaFavorita: (id) =>
    set((state) => ({
      favoritos: state.favoritos.filter(
        (receta) => receta.id !== id
      ),
    })),
}));
