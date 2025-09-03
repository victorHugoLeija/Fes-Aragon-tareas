contraseña = "5678"
Intento = 0
respuesta = ""
Bueno = 0

while Intento < 3:
    respuesta = input("Ingresa la contraseña: ")
    if contraseña == respuesta:
        Intento = Intento + 3
        print("entro")
        
        Bueno = 1
    else:
        print("Intenta de nuevo")
        Intento = Intento + 1

print("udua")
#if Bueno == 0:
#    print("Has sido bloqueado")
#else:
#    print("Bienvenido")
