"use client";
import { create } from "zustand";

type AuthMode = "signin" | "signup";

export type AppUser = {
  name: string;
  email: string;
};

type AuthState = {
  user: AppUser | null;
  ready: boolean;
  hydrateAuth: () => void;
  signIn: (email: string, name?: string) => void;
  signUp: (name: string, email: string) => void;
  signOut: () => void;
  authMode: AuthMode;
  setAuthMode: (mode: AuthMode) => void;
};

const storageKey = "stockflow-user";

const saveUser = (user: AppUser | null) => {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem(storageKey, JSON.stringify(user));
  } else {
    localStorage.removeItem(storageKey);
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  ready: false,
  authMode: "signin",
  hydrateAuth: () => {
    if (typeof window === "undefined") {
      set({ ready: true });
      return;
    }

    const saved = localStorage.getItem(storageKey);
    set({
      ready: true,
      user: saved ? (JSON.parse(saved) as AppUser) : null,
    });
  },
  signIn: (email, name) => {
    const user = { email, name: name || email.split("@")[0] || "Operator" };
    saveUser(user);
    set({ user });
  },
  signUp: (name, email) => {
    const user = { name, email };
    saveUser(user);
    set({ user });
  },
  signOut: () => {
    saveUser(null);
    set({ user: null });
  },
  setAuthMode: (authMode) => set({ authMode }),
}));
