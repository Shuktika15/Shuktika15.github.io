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
          My passion lies in creating captivating CSS art. Through meticulous coding, I bring static designs to life,
          crafting visually stunning masterpieces that push the boundaries of what's possible with cascading style sheets.
          Each artwork in my portfolio represents a harmonious blend of creativity, technical skill, and artistic expression.
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
                  I have crafted these digital paintings using the powerful canvas of ibisPaint X application.
                  With its versatile tools and brushes it has enhanced my artistic visions, blending colors and textures
                  with precision. Each painting in my collection serves as a proof of the limitless possibilities of
                  digital art, highlighting my passion for creativity.
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
