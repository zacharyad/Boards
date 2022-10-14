import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserState {
  email: string
  user_id: string | null
  setEmail: (email: string) => void
  setBoards: (boardsArr: { id: string, msg: string, isVisible: boolean }[]) => void
  setUserId: (userId: string) => void
  boards: { id: string, msg: string, isVisible: boolean }[]
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        email: "Friend!",
        user_id: null,
        boards: [],
        session:{},
        setEmail: (email) => set((state) => ({ email })),
        setUserId: (user_id) => set((state) => ({ user_id })),
        setBoards: (boards: { id: string, msg: string, isVisible: boolean }[]) => set((state) => ({boards})),
      }),
      {
        name: 'userState',
      }
    )
  )
)

export default useUserStore