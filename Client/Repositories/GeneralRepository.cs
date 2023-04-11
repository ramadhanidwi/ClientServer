using Client.Repositories.Interface;
using Client.ViewModels;
using Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text;

namespace Client.Repositories;

public class GeneralRepository<Entity, Key> : IRepository<Entity, Key>
    where Entity : class
{
    private readonly string request;
    private readonly HttpClient _httpClient;

    public GeneralRepository(string request)
    {
        this.request = request;
        _httpClient = new HttpClient
        {
            BaseAddress = new Uri("https://localhost:7049/api/")
        };
    }
    public async Task<ResponseStatusVM> Delete(Key id)
    {
        ResponseStatusVM entityVM = null;
        using (var response = _httpClient.DeleteAsync(request + id).Result)
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            //Deserialize berguna untuk convert dari string ke object 
            entityVM = JsonConvert.DeserializeObject<ResponseStatusVM>(apiResponse);
        }
        return entityVM;
    }

    public async Task<ReponseListVM<Entity>> Get()
    {
        ReponseListVM<Entity> reponseListVM = null;
        using (var response = await _httpClient.GetAsync(request))
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            reponseListVM = JsonConvert.DeserializeObject<ReponseListVM<Entity>>(apiResponse);
        }
        return reponseListVM;
    }

    public async Task<ResponseVM<Entity>> Get(Key id)
    {
        ResponseVM<Entity> reponseVM = null;
        using (var response = await _httpClient.GetAsync(request + id))
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            reponseVM = JsonConvert.DeserializeObject<ResponseVM<Entity>>(apiResponse);
        }
        return reponseVM;
    }

    public async Task<ResponseStatusVM> Post(Entity entity)
    {
        ResponseStatusVM entityVM= null;
        //Serialize berguna untuk mengconvert dari object ke string 
        StringContent content = new StringContent(JsonConvert.SerializeObject(entity), Encoding.UTF8, "application/json");
        using (var response = _httpClient.PostAsync(request,content).Result)
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            //Deserialize berguna untuk convert dari string ke object 
            entityVM = JsonConvert.DeserializeObject<ResponseStatusVM>(apiResponse);
        }
        return entityVM;
    }

    public async Task<ResponseStatusVM> Put(Entity entity, Key id)
    {
        ResponseStatusVM entityVM = null;
        //Serialize berguna untuk mengconvert dari object ke string 
        StringContent content = new StringContent(JsonConvert.SerializeObject(entity), Encoding.UTF8, "application/json");
        using (var response = _httpClient.PutAsync(request, content).Result)
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            //Deserialize berguna untuk convert dari string ke object 
            entityVM = JsonConvert.DeserializeObject<ResponseStatusVM>(apiResponse);
        }
        return entityVM;
    }
}
