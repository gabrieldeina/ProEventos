using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId { get; set; }
        public string Local { get; set; } = default!;
        public string DataEvento { get; set; } = default!;
        public string Tema { get; set; } = default!;
        public int QtdPessoas { get; set; }
        public string Lote { get; set; } = default!;
        public string ImagemURL { get; set; } = default!;
    }
}