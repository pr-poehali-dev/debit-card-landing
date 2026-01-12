import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface DebitCard {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  cashback: string;
  fee: string;
  fullDescription: string;
  features: string[];
}

const cards: DebitCard[] = [
  {
    id: 1,
    name: 'Базовая карта',
    image: '💳',
    shortDescription: 'Классическая карта для повседневных покупок',
    cashback: 'До 1%',
    fee: 'Бесплатно',
    fullDescription: 'Идеальная карта для ежедневного использования. Никаких скрытых комиссий, удобное мобильное приложение и быстрые переводы.',
    features: ['Бесплатное обслуживание', 'Кэшбэк до 1% на все покупки', 'Снятие в банкоматах без комиссии', 'Мгновенные переводы']
  },
  {
    id: 2,
    name: 'Премиум',
    image: '💎',
    shortDescription: 'Повышенный кэшбэк и премиальные бонусы',
    cashback: 'До 5%',
    fee: '199 ₽/мес',
    fullDescription: 'Карта для тех, кто ценит максимальную выгоду. Получайте кэшбэк до 5% в избранных категориях и пользуйтесь эксклюзивными предложениями.',
    features: ['Кэшбэк до 5% в категориях на выбор', 'Бесплатное снятие до 500 000 ₽', 'Консьерж-сервис 24/7', 'Приоритетная поддержка']
  },
  {
    id: 3,
    name: 'Молодёжная',
    image: '🎓',
    shortDescription: 'Специальные условия для молодых',
    cashback: 'До 10%',
    fee: 'Бесплатно до 25 лет',
    fullDescription: 'Созданная специально для молодёжи карта с максимальным кэшбэком на развлечения, кино, кафе и онлайн-покупки.',
    features: ['Кэшбэк 10% в кафе и кино', 'Бесплатное обслуживание до 25 лет', 'Бонусы за оплату подписок', 'Скидки у партнёров']
  },
  {
    id: 4,
    name: 'Путешественник',
    image: '✈️',
    shortDescription: 'Без комиссий за границей',
    cashback: 'До 3%',
    fee: '99 ₽/мес',
    fullDescription: 'Идеальная карта для путешествий. Оплачивайте покупки за границей без комиссий и получайте кэшбэк на транспорт и отели.',
    features: ['Оплата без комиссии в любой валюте', 'Кэшбэк 3% на отели и авиабилеты', 'Страховка при поездках', 'Выгодный курс конвертации']
  },
  {
    id: 5,
    name: 'Семейная',
    image: '👨‍👩‍👧‍👦',
    shortDescription: 'Выгода для всей семьи',
    cashback: 'До 7%',
    fee: '149 ₽/мес',
    fullDescription: 'Карта с повышенным кэшбэком на продукты, товары для детей и семейные развлечения. Подключайте дополнительные карты бесплатно.',
    features: ['Кэшбэк 7% в супермаркетах', 'Бесплатные дополнительные карты', 'Бонусы на детские товары', 'Семейная копилка']
  },
  {
    id: 6,
    name: 'Бизнес Старт',
    image: '💼',
    shortDescription: 'Для предпринимателей и фрилансеров',
    cashback: 'До 2%',
    fee: 'Бесплатно',
    fullDescription: 'Удобная карта для бизнеса с бесплатными переводами и выгодными условиями для предпринимателей.',
    features: ['Бесплатные переводы ИП и ООО', 'Кэшбэк 2% на бизнес-покупки', 'Интеграция с бухгалтерией', 'Автоматические отчёты']
  },
  {
    id: 7,
    name: 'Золотая',
    image: '🏆',
    shortDescription: 'Максимальные привилегии и статус',
    cashback: 'До 6%',
    fee: '499 ₽/мес',
    fullDescription: 'Карта премиум-класса с эксклюзивными привилегиями, высоким кэшбэком и доступом в VIP-залы аэропортов.',
    features: ['Кэшбэк до 6% без ограничений', 'Доступ в бизнес-залы аэропортов', 'Персональный менеджер', 'Металлическая карта с гравировкой']
  },
  {
    id: 8,
    name: 'Онлайн',
    image: '🌐',
    shortDescription: 'Виртуальная карта для интернет-покупок',
    cashback: 'До 4%',
    fee: 'Бесплатно',
    fullDescription: 'Моментальное оформление виртуальной карты для безопасных покупок в интернете с повышенным кэшбэком.',
    features: ['Мгновенный выпуск за 1 минуту', 'Кэшбэк 4% на онлайн-покупки', 'Защита от мошенничества', 'Временные карты для подписок']
  }
];

export default function DebitCardGrid() {
  const [selectedCard, setSelectedCard] = useState<DebitCard | null>(null);

  return (
    <section id="cards" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">Наши дебетовые карты</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите карту, которая подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card 
              key={card.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="text-6xl mb-4 text-center">{card.image}</div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center">{card.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center min-h-[40px]">
                  {card.shortDescription}
                </p>
                
                <div className="space-y-2 mb-4 bg-accent/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Кэшбэк:</span>
                    <span className="font-semibold text-primary">{card.cashback}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Обслуживание:</span>
                    <span className="font-semibold">{card.fee}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedCard(card)}
                  >
                    Подробнее
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Оформить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-2xl animate-scale-in">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{selectedCard?.image}</span>
              <div>
                <DialogTitle className="font-heading text-3xl">{selectedCard?.name}</DialogTitle>
                <DialogDescription className="text-base mt-1">
                  {selectedCard?.shortDescription}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-2">Описание</h4>
              <p className="text-muted-foreground">{selectedCard?.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-accent/30 rounded-lg p-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Кэшбэк</p>
                <p className="font-semibold text-primary text-xl">{selectedCard?.cashback}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Обслуживание</p>
                <p className="font-semibold text-xl">{selectedCard?.fee}</p>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-3">Преимущества</h4>
              <ul className="space-y-2">
                {selectedCard?.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setSelectedCard(null)}
              >
                Закрыть
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Icon name="CreditCard" size={18} className="mr-2" />
                Оформить карту
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
