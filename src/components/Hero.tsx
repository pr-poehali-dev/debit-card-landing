import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-accent via-white to-secondary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Открывайте карту онлайн за 5 минут</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Дебетовые карты с кэшбэком{' '}
            <span className="text-primary">до 10%</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Выбирайте из 8 видов карт и получайте максимум выгоды от каждой покупки. 
            Бесплатное обслуживание и моментальное оформление.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Выбрать карту
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm animate-fade-in">
              <Icon name="Zap" className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-semibold">Быстро</p>
                <p className="text-sm text-muted-foreground">За 5 минут</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm animate-fade-in">
              <Icon name="Shield" className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-semibold">Безопасно</p>
                <p className="text-sm text-muted-foreground">Защита 24/7</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm animate-fade-in">
              <Icon name="Gift" className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-semibold">Выгодно</p>
                <p className="text-sm text-muted-foreground">Кэшбэк до 10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
