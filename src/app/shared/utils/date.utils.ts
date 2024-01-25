import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const manaus: string = "America/Manaus";

export class DateUtils {
  public static date(dateString: string, formatString: string = "dd MMM yyyy"): string {
    const date: Date = new Date(dateString);
    return format(date, formatString, { locale: ptBR });
  }
}
