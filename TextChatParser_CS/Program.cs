using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace TextChatParser
{
    class Program
    {
        static void Main(string[] args)
        {
            new Rootobject
            {
                Property1 = new Class1[]
                {
                  new Class1
                  {
                      name="Chaitaan ka naam",
                      user=new User
                      {
                          name="User Naav",
                          status="zinda",
                          image="khichta abhi ka abhi"
                      },
                      messages=new Message[]
                      {
                          new Message
                          {
                              text="maisej ka text",
                              you=true,
                              image="DSLR nahi h ape paas"
                          }
                      }
                  }
              }
            };




        }
    }
}

//        public static void Parser()
//        {
//            var allMessages = new List<Message>();
//            var lines = File.ReadAllLines("chat.txt");

//            Console.WriteLine("All Lines Count : " + lines.Length);

//            var regexStartWithDate = new Regex(@"^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))");

//            Console.WriteLine(regexStartWithDate.Match(lines[0]).Success);
//            int count = 0;
//            Array.ForEach(lines, line =>
//            {
//                if (regexStartWithDate.Match(line).Success)
//                {
//                    allMessages.Add(StaticMessage.LastMesage());
//                    StaticMessage.ReInitialize();
//                    var betweenTimeAndSender = line.IndexOf("-");
//                    StaticMessage.Time = line.Substring(0, betweenTimeAndSender).Trim();
//                    var senderAndBody = line.Substring(betweenTimeAndSender);
//                    var betweenSenderAndBody = senderAndBody.IndexOf(":");
//                    if (betweenSenderAndBody == -1)
//                    {
//                        StaticMessage.IsInfo = true;
//                        StaticMessage.Body = line.Substring(betweenTimeAndSender + 2);
//                    }
//                    else
//                    {
//                        StaticMessage.Sender = senderAndBody.Substring(1, betweenSenderAndBody - 1).Trim();
//                        StaticMessage.Body = senderAndBody.Substring(betweenSenderAndBody + 1).Trim();
//                    }
//                }
//                else
//                    StaticMessage.Body += Environment.NewLine + line;

//            });
//            allMessages.Add(StaticMessage.LastMesage());
//            allMessages.RemoveAt(0);

//            Console.WriteLine(count);

//        }
//    }

//    static class StaticMessage
//    {
//        public static void ReInitialize()
//        {
//            Time = string.Empty;
//            Sender = string.Empty;
//            Body = string.Empty;
//        }

//        public static Message LastMesage()
//        {
//            return new Message
//            {
//                Time = Time,
//                Sender = Sender,
//                Body = Body
//            };
//        }

//        public static bool IsInfo { get; set; }
//        public static string Time { get; set; }
//        public static string Sender { get; set; }
//        public static string Body { get; set; }
//    }

//    public class Message
//    {
//        public static bool IsInfo { get; set; }
//        public string Time { get; set; }
//        public string Sender { get; set; }
//        public string Body { get; set; }
//    }
//}
