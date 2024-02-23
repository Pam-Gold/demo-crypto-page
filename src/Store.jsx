
import {create} from 'zustand';
import axios from 'axios'


const store = (set) => ({
data:[],
fetchData: async (url) =>{
  try{
const response = await fetch(url);

const results = response.json();

set({data:results})
  }
  catch(err){
console.warn(err)
  }
}
})

const useStore = create(store);

export default useStore;

