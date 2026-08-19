maior_altura = 0
menor_altura = 999
soma_altura_masculino = 0
quantidade_masculino = 0
quantidade_feminino = 0

for i in range(1, 16):
    print("--- Pessoa", i, "---")

    altura = float(input("Digite a altura (em metros, ex: 1.75): "))
    genero = input("Digite o genero (M para Masculino, F para Feminino): ")

    
    if altura > maior_altura:
        maior_altura = altura

    
    if altura < menor_altura:
        menor_altura = altura

    
    if genero == "M" or genero == "m":
        soma_altura_masculino = soma_altura_masculino + altura
        quantidade_masculino = quantidade_masculino + 1
    else:
        quantidade_feminino = quantidade_feminino + 1

media_masculino = soma_altura_masculino / quantidade_masculino

print(" ")
print("===== RESULTADOS =====")
print("Maior altura do grupo:", maior_altura, "m")
print("Menor altura do grupo:", menor_altura, "m")
print("Media de altura dos homens:", media_masculino, "m")
print("Numero de mulheres no grupo:", quantidade_feminino)