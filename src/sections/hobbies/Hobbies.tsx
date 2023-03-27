import './Hobbies.scss'
import userObserver from '../../services/observer'
import { useEffect, useRef } from 'preact/compat'
import { type JSX } from 'preact'

export default function Hobbies (): JSX.Element {
  interface ImageProp {
    name: string
    image: string
  }

  const CSSArt = (props: ImageProp): JSX.Element => {
    return <img loading="lazy" src={`/images/css-arts/${props.image}.webp`} alt={props.name}/>
  }
  const DigitalPainting = (props: ImageProp): JSX.Element => {
    return <img loading="lazy" src={`/images/digital-paintings/${props.image}.webp`} alt={props.name}/>
  }

  interface Image {
    name: string
    image: string
    animationClass: string
  }

  const cssArts: Image[] = [
    {
      name: 'Eye',
      image: 'eye',
      animationClass: 'fade-in-flip-down-to-up'
    }, {
      name: 'Santa',
      image: 'santa',
      animationClass: 'fade-in-flip-right-to-left'
    }, {
      name: 'Read',
      image: 'red',
      animationClass: 'fade-in-flip-left-to-right'
    }, {
      name: 'Butterfly',
      image: 'butterfly',
      animationClass: 'fade-in-flip-up-to-down'
    }
  ]
  const digitalPaintings: Image[] = [
    {
      name: 'Shuktikam',
      image: 'shuktikam',
      animationClass: 'fade-in-flip-right-to-left'
    }, {
      name: 'Girl and the Cat',
      image: 'girl-and-the-cat',
      animationClass: 'fade-in-flip-up-to-down'
    }, {
      name: 'Dawn',
      image: 'dawn',
      animationClass: 'fade-in-flip-left-to-right'
    }, {
      name: 'Swirl',
      image: 'swirl',
      animationClass: 'fade-in-flip-down-to-up'
    }, {
      name: 'Flower',
      image: 'flower',
      animationClass: 'fade-in-flip-right-to-left'
    }
  ]
  const imageRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    userObserver<HTMLElement>(
      imageRefs.current,
      (entry, observer) => {
        if (entry.isIntersecting) {
          entry.target.className = 'transition'
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.5
      }
    )
  }, [])

  return (
    <section id="Hobbies">
      <h1>Hobbies</h1>
      <article className="hobby">
        <h3 className="color-accent">CSS Art</h3>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam cumque, error esse
          eveniet, facilis fugiat harum illum incidunt laboriosam minus modi molestias natus nihil non optio
          perferendis quae qui quia quibusdam, quo quod recusandae repudiandae sed sint temporibus.
        </p>
        <div className="collage css-arts">
          {cssArts.map(el =>
            <div
              className={`transition ${el.animationClass}`}
              ref={(ref) => imageRefs.current.push(ref as HTMLElement)}
              key={el.name}
            >
              <CSSArt name={el.name} image={el.image}/>
            </div>
          )}
        </div>
            </article>
            <article className="hobby">
                <h3 className="color-accent">Digital Painting</h3>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam cumque, error esse
                    eveniet, facilis fugiat harum illum incidunt laboriosam minus modi molestias natus nihil non optio
                    perferendis quae qui quia quibusdam, quo quod recusandae repudiandae sed sint temporibus.
                </p>
                <div className="collage digital-paintings">
                    {digitalPaintings.map(el =>
                      <div
                        className={`transition ${el.animationClass}`}
                        ref={(ref) => imageRefs.current.push(ref as HTMLElement)}
                        key={el.name}
                      >
                        <DigitalPainting name={el.name} image={el.image}/>
                      </div>
                    )}
                </div>
            </article>
        </section>
  )
}
