import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-accent border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="CreditCard" className="text-primary" size={24} />
              <span className="font-heading font-bold text-lg">CardBank</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Надёжные дебетовые карты с кэшбэком и выгодными условиями
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Дебетовые карты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Кредитные карты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вклады</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Переводы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отделения</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@cardbank.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 CardBank. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="hover:text-primary transition-colors">Лицензия ЦБ РФ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
