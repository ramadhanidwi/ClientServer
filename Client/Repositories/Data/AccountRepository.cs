﻿using Client.Models;
using Client.ViewModels;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Newtonsoft.Json;
using System.Text;

namespace Client.Repositories.Data;

public class AccountRepository : GeneralRepository<Account,int>
{
    private readonly HttpClient _httpClient;
    private readonly string request;

    public AccountRepository(string request = "Account/") : base(request)
	{
        this.request = request;
        _httpClient = new HttpClient
        {
            BaseAddress = new Uri("https://localhost:7049/api/")
        }; 
    }

    public async Task<ResponseVM<string>> Login (LoginVM entity)
    {
        ResponseVM<string> entityVM = null;
        StringContent content = new StringContent(JsonConvert.SerializeObject(entity), Encoding.UTF8, "application/json");
        using (var response =  _httpClient.PostAsync(request + "Login", content).Result)
        {
            string apiResponse = await response.Content.ReadAsStringAsync();
            entityVM = JsonConvert.DeserializeObject<ResponseVM<string>>(apiResponse);
        }
        return entityVM;
    }
}
