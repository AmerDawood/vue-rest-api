import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useArticles(){
    const articles  = ref([]);
    const article = ref([]);
    const errors = ref({});
    const router = useRouter();


    const getArticles = async ()=>{
        const response = await axios.get("articles");
        articles.value =  response.data.data;
    };


    const getArticle = async (id) => {
        const response = await axios.get("articles/" + id);
        skill.value = response.data.data;
    
      };


    const storeArticle = async (data)=>{
        try{
          await axios.post("articles",data);
          await router.push({name:"ArticleIndex"});
        }catch(error){
          if(error.response.status ===422){
            errors.response = error.response.data.errors;
          }
        }
    };



    
  const updateArticle = async (id) => {
    try {
      await axios.put("articles/" + id, article.value);
      await router.push({ name: "ArticleIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };


  const destroyArticle = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("articles/" + id);
    await getArticle();
  };


  return {
    article,
    articles,
    getArticles,
    getArticle,
    storeArticle,
    updateArticle,
    destroyArticle,
    errors,
  };

}