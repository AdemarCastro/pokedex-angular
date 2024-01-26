import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class DateUtils {
  public static getDate(dateString: string, formatString: string = "dd MMM yyyy"): string {
    const date: Date = new Date(dateString);
    return format(date, formatString, { locale: ptBR });
  }

  public static getNumericDate(dateString: string, formatString: string = "dd-MM-yyyy"): string {
    const date: Date = new Date(dateString);
    return format(date, formatString, { locale: ptBR });
  }
}
