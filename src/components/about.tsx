import { Section } from "./section"

export function About() {
    return (
      <Section id="about-me" title="About">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
              welcome to my personal website!
          </p>
          <p>
              currently: <br />
                ~ b.s. in cs & minor in business @ oregon state
                <br />
                ~ software developer @ cass
          </p>
          <p className="text-foreground">
              this website is meant to be a showcase of my work. enjoy!
          </p>
        </div>
      </Section>
    )
}
