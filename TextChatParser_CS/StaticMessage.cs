namespace TextChatParser
{
    static class StaticMessage
    {
        public static bool IsInfo { get; set; }
        public static string Time { get; set; }
        public static string Sender { get; set; }
        public static string Body { get; set; }

        public static void ReInitialize()
        {
            Time = string.Empty;
            Sender = string.Empty;
            Body = string.Empty;
        }

        public static SingleMessage LastMesage()
        {
            return new SingleMessage
            {
                Time = Time,
                Sender = Sender,
                Body = Body
            };
        }
    }
}