using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace TextChatParser
{
    public class Parser
    {

        public static void Parse()
        {
            var allMessages = new List<SingleMessage>();
            var lines = File.ReadAllLines("chat.txt");

            Console.WriteLine("All Lines Count : " + lines.Length);

            var regexStartWithDate = new Regex(@"^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))");

            Console.WriteLine(regexStartWithDate.Match(lines[0]).Success);
            int count = 0;
            Array.ForEach(lines, line =>
            {
                if (regexStartWithDate.Match(line).Success)
                {
                    allMessages.Add(StaticMessage.LastMesage());
                    StaticMessage.ReInitialize();
                    var betweenTimeAndSender = line.IndexOf("-");
                    StaticMessage.Time = line.Substring(0, betweenTimeAndSender).Trim();
                    var senderAndBody = line.Substring(betweenTimeAndSender);
                    var betweenSenderAndBody = senderAndBody.IndexOf(":");
                    if (betweenSenderAndBody == -1)
                    {
                        StaticMessage.IsInfo = true;
                        StaticMessage.Body = line.Substring(betweenTimeAndSender + 2);
                    }
                    else
                    {
                        StaticMessage.Sender = senderAndBody.Substring(1, betweenSenderAndBody - 1).Trim();
                        StaticMessage.Body = senderAndBody.Substring(betweenSenderAndBody + 1).Trim();
                    }
                }
                else
                    StaticMessage.Body += Environment.NewLine + line;
            });
            allMessages.Add(StaticMessage.LastMesage());
            allMessages.RemoveAt(0);

            Console.WriteLine(count);
        }
    }
}