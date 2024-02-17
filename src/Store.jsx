
import {create} from 'zustand';
import axios from 'axios'


const store = (set) => ({
data:[],
fetchData: async (url) =>{
  try{
const res = await axios.get(url);

set({data:res.data})
  }
  catch(err){
console.warn(err)
  }
}
})

const useStore = create(store);

export default useStore;

