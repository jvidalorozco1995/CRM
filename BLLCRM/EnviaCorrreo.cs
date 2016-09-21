using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;

namespace BLLCRM
{
    class EnviaCorrreo
    {
        public bool EnviarMail(string Destino, string Titulo, string Cuerpo, string EmisorNombre, string EmisorMail, string Password)
        {
            MailMessage message = new MailMessage();
            message.To.Add(Destino);
            message.From = new MailAddress(EmisorMail, EmisorNombre, Encoding.UTF8);
            message.Subject = Titulo;
            message.SubjectEncoding = Encoding.UTF8;
            message.Body = Cuerpo;
            message.BodyEncoding = Encoding.UTF8;
            message.IsBodyHtml = false;
            SmtpClient client = new SmtpClient
            {
                Credentials = new NetworkCredential(EmisorMail, Password),
                Port = 26,
                Host = "mail.mayales.com",
                EnableSsl = false
            };
            try
            {
                client.Send(message);
                return true;
            }
            catch (SmtpException)
            {
                return false;
            }
        }
    }
}
