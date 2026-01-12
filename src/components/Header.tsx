import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="CreditCard" className="text-primary" size={28} />
          <span className="font-heading font-bold text-xl text-foreground">CardBank</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#cards" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Карты
          </a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Преимущества
          </a>
          <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Войти
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Заказать карту
          </Button>
        </div>
      </div>
    </header>
  );
}
