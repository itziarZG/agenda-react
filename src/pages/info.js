import Head from "next/head";
import Link from "next/link";

export default function Info() {
  return (
    <>
      <Head>
        <title>Agenda Peques - Info del proyecto</title>
        <meta
          property="og:title"
          content="Agenda Peques - Info del proyecto"
          key="title"
        />
        <meta
          property="og:description"
          name="description"
          content="Información del porqué de esta página Agenda Peques"
          key="description"
        />
      </Head>
      <div className="info__texts">
        <Link href="/">
          <a className="info__link">Volver a Eventos</a>
        </Link>

        <p className="info__texts__text">
          CAT- Hola. Volia, simplement, explicar-te què és i el perquè d'aquest
          projecte. Aquesta web surt de la meva pròpia necessitat
          d'assabentar-me dels esdeveniments que hi ha a l'illa per a anar amb
          la meva família, especialment amb els meus fills petits. Durant uns
          anys he buscat en agendes en línia de l'illa i no he trobat cap que
          compti amb esdeveniments infantils especialment o són massa
          especialitzades en esdeveniments concrets (escoles o biblioteques) o
          en població concreta (ajuntaments). La majoria de vegades és per boca
          a boca i per això aquest projecte està pensat perquè les famílies ens
          ajudem entre nosaltres a trobar esdeveniments infantils. La idea és
          que quan sapiguem d'un esdeveniment infantil a l'illa el publiquem
          qualsevol de nosaltres. Aquesta és la raó d'haver de donar-te d'alta,
          perquè la teva puguis publicar esdeveniments, i com que és una web de
          contingut infantil, hi hagi un mínim control queda guardat un
          identificador d'usuari per si algun contingut no fos adequat,
          cancel·lar aquest compte. No crec se de el cas però crec que haig de
          protegir els nens que puguin entrar en aquesta web. No crec que aquest
          projecte creixi tant com per a necessitar una validació anterior però
          si fes falta, es faria... Si ets professional del sector, pots
          donar-te d'alta i publicar les teves bitlles, estarem encantad@s! Si
          ets ajuntament, biblioteca o col·legi, també ets més que bienvenid@.
        </p>
        <br className="info__line"></br>
        <p>
          CAST-Quería, simplemente, explicarte qué es y el porqué de este
          proyecto. Esta web sale de mi propia necesidad de enterarme de los
          eventos que hay en la isla para ir con mi familia, especialmente con
          mis hijos pequeños. Durante unos años he buscado en agendas online de
          la isla y no he encontrado ninguna que cuente con eventos infantiles
          especialmente o son demasiado especializadas en eventos concretos
          (escuelas o bibliotecas) o en población concreta (ayuntamientos). La
          mayoría de veces es por boca a boca y por eso este proyecto está
          pensado para que las familias nos ayudemos entre nosotros a encontrar
          eventos infantiles. La idea es que cuando sepamos de un evento
          infantil lo publiquemos.Esta es la razón de tener que darte de alta,
          para que tu puedas publicar eventos, y puesto que es una web de
          contenido infantil, haya un mínimo control queda guardado un
          identificador de usuario por si algún contenido no fuera adecuado,
          cancelar esa cuenta. No creo se de el caso pero creo que debo proteger
          a los peques que puedan entrar en esta web. No creo que este proyecto
          crezca tanto como para necesitar una validación anterior pero si
          hiciera falta, se haría... Si eres profesional del sector, puedes
          darte de alta y publicar tus bolos, estaremos encantad@s! Si eres
          ayuntamiento, biblioteca o colegio, también eres más que bienvenid@.
        </p>
      </div>
    </>
  );
}
