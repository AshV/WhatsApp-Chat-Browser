using System;
using System.Collections.Generic;
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
            var allMessages = new List<Message>();
            var lines = File.ReadAllLines("chat.txt");

            Console.WriteLine("All Lines Count : " + lines.Length);

            var regexStartWithDate = new Regex(@"^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))");

            Console.WriteLine(regexStartWithDate.Match(lines[0]).Success);
            int count = 0;
            Array.ForEach(lines, line =>
            {
                var time = string.Empty;
                var sender = string.Empty;
                var body = string.Empty;
                if (regexStartWithDate.Match(line).Success)
                {
                    var betweenTimeAndSender = line.IndexOf("-");
                    time = line.Substring(0, betweenTimeAndSender).Trim();
                    var senderAndBody = line.Substring(betweenTimeAndSender);
                    var betweenSenderAndBody = senderAndBody.IndexOf(":");
                    sender = senderAndBody.Substring(1, betweenSenderAndBody - 1).Trim();
                    body = senderAndBody.Substring(betweenSenderAndBody + 1).Trim();
                }
                else
                {
                    body += Environment.NewLine + line;
                }
            });

            Console.WriteLine(count);
        }


    }

    class Message
    {
        public string Time { get; set; }
        public string Sender { get; set; }
        public string Body { get; set; }
    }
}
