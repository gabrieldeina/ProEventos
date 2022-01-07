using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public IEnumerable<Evento> eventos = new Evento[] {

        new Evento() {
            EventoId = 1,
            Tema = "Angular 11 e .NET 5",
            Local = "Curitiba",
            Lote = "1º Lote",
            QtdPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
        },
        new Evento() {
            EventoId = 2,
            Tema = "Angular 13 e .NET 6",
            Local = "Curitiba",
            Lote = "2º Lote",
            QtdPessoas = 150,
            DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
        }
    };
    public EventoController()
    {
    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return this.eventos;
    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return this.eventos.Where(eventos => eventos.EventoId == id);
    }

    [HttpPost]
    public string Post()
    {
        return "Exemplo de Post";
    }

    [HttpPut("{id}")]
    public string Put(int id)
    {
        return $"Exemplo de Put com id = {id}";
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
        return $"Exemplo de Delete com id = {id}";
    }
}
