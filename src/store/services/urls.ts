

export const URLS = {
    AUTH: {
        LOGIN: "/auth/sign_in",
        REGISTER: "/auth/register",
    }, 
    NOTEBOOK: {
        CREATE: '/new/notebook',
        UPDATE: (id: string) => `/notesbook/${id}`,
        DELETE: (id: string) => `/notesbook/${id}`,
        NOTEBOOK: (id: string) => `/notesbook/${id}`,
        LIST: (search: string) => `/notesbooks?search=${search}`,
    }, 
    NOTE: {
        CREATE: (id: string) => `/new/notebook/${id}/note`,
        UPDATE: (notebook_id: string, note_id: string) => `/notebook/${notebook_id}/note/${note_id}`,
        DELETE: (notebook_id: string, note_id: string) => `/notebook/${notebook_id}/note/${note_id}`,
        NOTEBOOK: (notebook_id: string, note_id: string) => `/notebook/${notebook_id}/note/${note_id}`,
        LIST: (search: string, id: string) => `/notebook/${id}/notes?search=${search}`,
    }
}