
public class Rootobject
{
    public Class1[] Property1 { get; set; }
}

public class Class1
{
    public string name { get; set; }
    public User user { get; set; }
    public Message[] messages { get; set; }
}

public class User
{
    public string name { get; set; }
    public string status { get; set; }
    public string image { get; set; }
}

public  class Message
{
    public string text { get; set; }
    public bool you { get; set; }
    public string image { get; set; }
}
