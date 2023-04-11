namespace Client.Repositories.Data;
using Client.Models;

public class UniversityRepository : GeneralRepository<University, int>
{
    private readonly HttpClient _httpClient;
    private readonly string request;

    public UniversityRepository(string request = "Universities/") : base(request)
    {
        this.request = request;
        _httpClient = new HttpClient
        {
            BaseAddress = new Uri("https://localhost:7049/api/")
        };
    }
}
