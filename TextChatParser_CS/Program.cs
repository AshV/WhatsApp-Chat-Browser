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
            var lines = File.ReadAllLines("chat.txt");

            Console.WriteLine("All Lines Count : " + lines.Length);

            var regexStartWithDate = new Regex(@"^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))");

            Console.WriteLine(regexStartWithDate.Match(lines[0]).Success);
            int count = 0;
            Array.ForEach(lines, l => { if (regexStartWithDate.Match(l).Success) count++; });

            Console.WriteLine(count);

            // 12/14/16, 11:21 - N Pandey: 💥तुरंत निकाले ये 4 एप्प मोबाइल से

            var line = lines[0];

            var message = new Message();

            var betweenTimeAndSender = line.IndexOf("-");
            message.Time = line.Substring(0, betweenTimeAndSender).Trim();
            var senderAndBody = line.Substring(betweenTimeAndSender);
            var betweenSenderAndBody = senderAndBody.IndexOf(":");
            message.Sender = senderAndBody.Substring(1, betweenSenderAndBody-1).Trim();
            message.Body = senderAndBody.Substring(betweenSenderAndBody+1).Trim();
        }
    }

    class Message
    {
        public string Time { get; set; }
        public string Sender { get; set; }
        public string Body { get; set; }
    }
}
