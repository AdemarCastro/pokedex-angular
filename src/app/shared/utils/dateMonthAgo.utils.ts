export class DateMonthAgoUtils {
  public static getDateMonthAgo() {
    // Data atual
    const currentDate : Date = new Date();

    // Subtrai 30 dias da data atual
    let dateMonthAgo : Date = new Date(currentDate);
    dateMonthAgo.setDate(currentDate.getDate() - 30);

    // Data de 30 dias atrás
    return dateMonthAgo;
  }
}
