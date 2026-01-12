import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Анна Смирнова',
    role: 'Предприниматель',
    avatar: 'АС',
    rating: 5,
    text: 'Отличная карта для бизнеса! Кэшбэк помогает экономить на расходах, а мобильное приложение очень удобное. Рекомендую всем ИП.',
    card: 'Бизнес Старт'
  },
  {
    name: 'Дмитрий Петров',
    role: 'Путешественник',
    avatar: 'ДП',
    rating: 5,
    text: 'Пользуюсь картой «Путешественник» уже полгода. Оплачивал покупки в 15 странах без единой комиссии. Очень доволен!',
    card: 'Путешественник'
  },
  {
    name: 'Елена Иванова',
    role: 'Мама двоих детей',
    avatar: 'ЕИ',
    rating: 5,
    text: 'Семейная карта — просто находка! Кэшбэк на продукты экономит семейный бюджет. Удобно подключили карты всем членам семьи.',
    card: 'Семейная'
  },
  {
    name: 'Александр Козлов',
    role: 'Студент',
    avatar: 'АК',
    rating: 5,
    text: 'Молодёжная карта с кэшбэком 10% в кафе и кино — это просто огонь! Плюс бесплатное обслуживание. Все друзья уже оформили.',
    card: 'Молодёжная'
  },
  {
    name: 'Мария Волкова',
    role: 'Дизайнер',
    avatar: 'МВ',
    rating: 5,
    text: 'Премиум карта стоит своих денег. Консьерж-сервис очень помогает, а кэшбэк 5% покрывает стоимость обслуживания с запасом.',
    card: 'Премиум'
  },
  {
    name: 'Игорь Соколов',
    role: 'IT-специалист',
    avatar: 'ИС',
    rating: 5,
    text: 'Оформил виртуальную карту за минуту прямо с телефона. Использую для онлайн-покупок и подписок. Максимально удобно!',
    card: 'Онлайн'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Узнайте, что говорят наши клиенты о дебетовых картах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="inline-flex items-center gap-2 bg-accent/50 rounded-full px-3 py-1 text-sm">
                  <Icon name="CreditCard" size={14} className="text-primary" />
                  <span className="font-medium">{testimonial.card}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <Icon name="TrendingUp" className="text-primary" size={20} />
            <span className="font-semibold text-primary">4.9/5.0</span>
            <span className="text-muted-foreground">на основе 12,458 отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
}
