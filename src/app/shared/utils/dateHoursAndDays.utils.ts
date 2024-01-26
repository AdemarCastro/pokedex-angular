export class DateHoursAndDaysUtils {

  public static getDateHoursAndDays(dateString: string) : string {
    // Ajusta a data de entrada para o tipo Date
    const postDate : Date = new Date(dateString);

    // Obtém a data atual
    const currentDate : Date = new Date();

    // Calcula a diferença em milissegundos
    const timeDifferenceInMilliseconds = currentDate.getTime() - postDate.getTime();

    //Calcula a diferença em horas
    const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

    // Se a diferença for menor que 1 dia, exibe em horas
    if (timeDifferenceInHours < 24) {
      const horas = Math.round(timeDifferenceInHours);
      return `${horas} ${horas === 1 ? 'hora' : 'hora'}`;
    } else {
      // Caso contrário, exibe em dias
      const timeDifferenceInDays = Math.round(timeDifferenceInHours / 24);
      return `${timeDifferenceInDays} ${timeDifferenceInDays === 1 ? 'dia' : 'dias'}`;
    }
  }
}
