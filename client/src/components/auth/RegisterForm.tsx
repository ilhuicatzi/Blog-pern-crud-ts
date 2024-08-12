import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegisterForm() {
  return (
    <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                type="firstName"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                type="lastName"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="*******" required />
            </div>
            <Button type="submit" className="w-full">
                Registrate
            </Button>
            <Button variant="outline" className="w-full">
                Continuar con Google
            </Button>
          </div>
  )
}

export default RegisterForm