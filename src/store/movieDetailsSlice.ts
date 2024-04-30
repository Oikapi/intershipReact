import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import {Movie} from "../сommonTypes/index"

export type MovieDetailsState = {
    movie: Movie | null;
    loading: boolean;
    error: string | null;
}

export const fetchMovieDetails = createAsyncThunk<Movie, string|undefined, {rejectValue: string}>(
    'todos/fetchMovieDetails',
    async function (movieId, { rejectWithValue }) {
      const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${movieId}`,{
        method: 'GET',
        headers: {
          'X-API-KEY': import.meta.env.VITE_APP_API_KEY,
        },
      });
    //   console.log()
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }

      const data = await response.json();

      return data;
    }
);

// export const addNewTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
//   'todos/addNewTodo',
//   async function (text, { rejectWithValue }) {
//       const todo = {
//         title: text,
//         userId: 1,
//         completed: false,
//       };

//       const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//       });

//       if (!response.ok) {
//         return rejectWithValue('Can\'t add task. Server error.');
//       }

//       return (await response.json()) as Todo;
//   }
// );

// export const toggleStatus = createAsyncThunk<Todo, string, { rejectValue: string, state: { todos: TodosState} }>(
//   'todos/toggleStatus',
//   async function (id, { rejectWithValue, getState }) {
//     const todo = getState().todos.list.find(todo => todo.id === id);

//     if (todo) {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           completed: !todo.completed,
//         })
//       });
  
//       if (!response.ok) {
//         return rejectWithValue('Can\'t toggle status. Server error.');
//       }
  
//       return (await response.json()) as Todo; 
//     }

//     return rejectWithValue('No such todo in the list!')
//   }
// );

// export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
//   'todos/deleteTodo',
//   async function (id, { rejectWithValue }) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//       method: 'DELETE',
//     })

//     if (!response.ok) {
//       return rejectWithValue('Can\'t delete task. Server error.');
//     }

//     return id;
//   }
// );

const initialState: MovieDetailsState = {
    movie: null,
  loading: false,
  error: null,
}

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.loading = false;
      })
    //   .addCase(addNewTodo.pending, (state) => {
    //     state.error = null;
    //   })
    //   .addCase(addNewTodo.fulfilled, (state, action) => {
    //     state.list.push(action.payload);
    //   })
    //   .addCase(toggleStatus.fulfilled, (state, action) => {
    //     const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
    //     if (toggledTodo) {
    //       toggledTodo.completed = !toggledTodo.completed;
    //     }
    //   })
    //   .addCase(deleteTodo.fulfilled, (state, action) => {
    //     state.list = state.list.filter(todo => todo.id !== action.payload);
    //   })
    //   .addMatcher(isError, (state, action: PayloadAction<string>) => {
    //     state.error = action.payload;
    //     state.loading = false;
    //   });
  }
});

// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default movieDetailsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}