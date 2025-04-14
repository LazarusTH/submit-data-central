
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FormCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export function FormCard({ title, description, icon, children }: FormCardProps) {
  return (
    <Card className="w-full max-w-2xl shadow-md">
      <CardHeader className="border-b bg-muted/20">
        <div className="flex items-center gap-2">
          {icon}
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
}
