namespace Client.ViewModels;

public class ReponseListVM<Entity>
{
    public int Status { get; set; }
    public string Message { get; set; }
    public List<Entity>? Data { get; set; }
}
