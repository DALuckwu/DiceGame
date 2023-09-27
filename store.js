import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create(
  persist(
    (set) => ({
      history: [], // Inicialize o estado global com um array vazio para o histórico
      addToHistory: (result) =>
        set((state) => ({ history: [...state.history, result] })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'diceHistory', // Nome do estado persistido no AsyncStorage
      getStorage: () => AsyncStorage,
    }
  )
);

export default useStore;
