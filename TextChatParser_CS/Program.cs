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
        }
    }
}
