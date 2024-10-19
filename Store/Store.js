import { create } from 'zustand'

export const {useState} = create((set) => ({
    count: 0,
    increment: () =>
        set((state) => ({
            count: set.count + 1
        }))
}))