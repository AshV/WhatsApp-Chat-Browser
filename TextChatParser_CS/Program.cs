using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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
            var json = new Class1[]
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
                              image="DSLR nahi h apne paas"
                          }
                      }

              }
                  };


            JsonSerializer serializer = new JsonSerializer();
            serializer.Converters.Add(new JavaScriptDateTimeConverter());
            serializer.NullValueHandling = NullValueHandling.Ignore;

            using (StreamWriter sw = new StreamWriter(@"json.json"))
            using (JsonWriter writer = new JsonTextWriter(sw))
            {
                serializer.Serialize(writer, json);
                // {"ExpiryDate":new Date(1230375600000),"Price":0}
            }


        }



    }
}