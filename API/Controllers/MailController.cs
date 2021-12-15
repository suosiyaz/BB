using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Net.Mail;

namespace API.Controllers
{
    public class MailController : BaseApiController
    {
        private readonly IConfiguration _config;
        public MailController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public  async Task<ActionResult<string>> SendMail()
        {
            SmtpClient client = new SmtpClient();
            client.Host = "smtp.sendgrid.net";
            client.EnableSsl = true;
            client.Port = 465;
            client.Credentials = new System.Net.NetworkCredential("pokunniputhankode", "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");
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("admin@bilkeesboutique.in");
            mail.To.Add("siyazputhancode@gmail.com");
            mail.Subject = "Test";
            mail.Body = "This is a test message";
            client.Send(mail);            

            return Ok("Sent");
        }
    }
}