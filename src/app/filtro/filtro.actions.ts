import { createAction, props } from '@ngrx/store';

// export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export enum filtrosValidos {
    Todos = 'todos',
    Completados = 'completados',
    Pendientes = 'pendientes'
}
export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);
