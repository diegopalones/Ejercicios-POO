// Ejercicio POO:

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
    obtDetalles() {
      console.log(
        `Me llamo ${this.nombre}, tengo ${this.edad} años y soy de genero ${this.genero}`
      );
    }
  }

  const persona1 = new Persona("Diego", 44 , "masculino");
persona1.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero);
      this.curso = curso;
      this.grupo = grupo;
    }
    registrar() {
      console.log(
        `Soy ${this.nombre} y tengo ${this.edad} años, soy de genero ${this.genero} y voy a ${this.curso} al grupo ${this.grupo}`
      );
    }
  }
  const estudiante1 = new Estudiante("Hilarino", 57, "masculino", "3º de EGB", "de los mayores");
  estudiante1.registrar();

//   Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero);
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
    asignar() {
      console.log(
        `me llamo ${this.nombre}, tengo ${this.edad} años y soy de genero ${this.genero}. Imparto ${this.asignatura} de nivel ${this.nivel}`
      );
    }
  }
  const profesor1 = new Profesor("Edelvina",49,"femenino","gimnasia","4º de la ESO.");
  
  
  profesor1.asignar();
  
  
  
    

  