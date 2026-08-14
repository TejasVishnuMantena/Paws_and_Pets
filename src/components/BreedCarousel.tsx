import { useState } from 'react';
import { X } from 'lucide-react';
import breedGolden from '@/assets/breed-golden.png';
import breedShepherd from '@/assets/breed-shepherd.png';
import breedPoodle from '@/assets/breed-poodle.png';
import breedHusky from '@/assets/breed-husky.png';
import breedBeagle from '@/assets/breed-beagle.png';
import breedDalmatian from '@/assets/breed-dalmatian.png';
import breedLabrador from '@/assets/breed-labrador.png';
import breedBulldog from '@/assets/breed-bulldog.png';

const breeds = [
  {
    name: 'Golden Retriever',
    img: breedGolden,
    info: `Golden Retrievers are one of the most beloved dog breeds worldwide, known for their gentle temperament and unwavering loyalty. They are incredibly intelligent and eager to please, making them one of the easiest breeds to train. Goldens thrive in family environments and are especially wonderful with children, showing patience and affection in equal measure. They require regular exercise — at least an hour daily — and love swimming, fetching, and outdoor adventures. Their beautiful golden coat needs regular brushing to manage shedding. Best suited for active families, first-time dog owners, and anyone seeking a loyal, affectionate companion who will greet you with a wagging tail every single day. They also excel as therapy dogs and service animals due to their calm, empathetic nature.`,
  },
  {
    name: 'German Shepherd',
    img: breedShepherd,
    info: `German Shepherds are renowned for their intelligence, courage, and versatility, consistently ranking among the top three most popular breeds globally. Originally bred for herding, they have evolved into exceptional working dogs used in police, military, and search-and-rescue operations. They form deep bonds with their owners and are fiercely protective of their families, making them outstanding guard dogs. German Shepherds need significant physical and mental stimulation — long walks, obedience training, and puzzle toys keep them happy. Their double coat sheds heavily twice a year and requires regular grooming. Best suited for experienced dog owners, active individuals, and families with older children who can match their energy and provide consistent training and leadership.`,
  },
  {
    name: 'Poodle',
    img: breedPoodle,
    info: `Poodles are exceptionally intelligent dogs that come in three sizes — Standard, Miniature, and Toy — making them adaptable to various living situations from apartments to large homes. Despite their elegant appearance, Poodles are athletic and energetic dogs that excel in agility, obedience, and even water retrieval. Their hypoallergenic, curly coat makes them an excellent choice for allergy sufferers, though it requires regular professional grooming every 4-6 weeks. Poodles are deeply loyal and form strong attachments to their families, sometimes becoming anxious when left alone for extended periods. They are quick learners who respond beautifully to positive reinforcement training. Best suited for families with allergies, apartment dwellers, and owners who enjoy grooming and training their pets.`,
  },
  {
    name: 'Husky',
    img: breedHusky,
    info: `Siberian Huskies are strikingly beautiful dogs with wolf-like features, bright blue or multi-colored eyes, and thick double coats built for extreme cold. Originally bred as sled dogs in Siberia, they possess incredible endurance and a strong desire to run — they need at least two hours of vigorous exercise daily. Huskies are known for their playful, mischievous personality and their tendency to "talk" with howls and vocalizations rather than traditional barking. They are pack animals who get along well with other dogs but have a strong prey drive around smaller animals. Huskies are notorious escape artists who can jump fences and dig under barriers. Best suited for very active owners, runners, and families in cooler climates who can provide ample exercise and secure outdoor spaces.`,
  },
  {
    name: 'Beagle',
    img: breedBeagle,
    info: `Beagles are small-to-medium scent hounds with an extraordinary sense of smell, ranking among the top three breeds for olfactory ability. Their friendly, curious nature makes them wonderful family pets, and they are particularly gentle and patient with children. Beagles are pack dogs at heart and thrive with companionship — both human and canine — and can develop separation anxiety if left alone frequently. They have a distinctive bay or howl that they use enthusiastically, which may be a consideration for apartment living. Beagles require moderate exercise and mental stimulation, especially scent-based games and puzzle feeders. Their short coat is low-maintenance but sheds moderately. Best suited for families with children, multi-pet households, and owners who enjoy outdoor walks and can provide consistent companionship.`,
  },
  {
    name: 'Dalmatian',
    img: breedDalmatian,
    info: `Dalmatians are instantly recognizable with their unique spotted coat pattern, where no two dogs have identical markings. Historically bred as carriage dogs, they possess remarkable stamina and athleticism, needing at least 90 minutes of vigorous exercise daily. Dalmatians are highly energetic, intelligent, and can be independent thinkers, which means they need firm, consistent training from an early age. They are loyal and affectionate with their families but can be reserved around strangers. Their short, dense coat sheds heavily year-round despite its short length. Dalmatians are prone to deafness — about 30% are affected in one or both ears — so hearing tests are important. Best suited for very active owners, runners, cyclists, and families who can dedicate significant time to exercise and training.`,
  },
  {
    name: 'Labrador',
    img: breedLabrador,
    info: `Labrador Retrievers have been the most popular dog breed for decades, and for good reason — they combine a friendly, outgoing temperament with intelligence and adaptability. Labs come in three colors: black, yellow, and chocolate, and are medium-to-large dogs with muscular builds. They are natural swimmers with water-repellent coats and otter-like tails, making them excellent companions for water activities. Labs are food-motivated and eager to please, which makes training enjoyable but also means they can be prone to obesity without proper diet management. They need at least an hour of exercise daily and remain playful well into adulthood. Best suited for families of all sizes, first-time dog owners, active individuals, and those looking for a versatile companion that excels as a family pet, therapy dog, or hunting partner.`,
  },
  {
    name: 'Bulldog',
    img: breedBulldog,
    info: `Bulldogs are sturdy, compact dogs with a distinctive wrinkled face and pushed-in nose that gives them their characteristic charm. Despite their tough appearance, Bulldogs are incredibly gentle, affectionate, and patient, earning them the nickname "nanny dogs" for their wonderful behavior around children. They are low-energy dogs that prefer short walks and plenty of nap time, making them ideal for apartment living and less active lifestyles. Their flat face means they are sensitive to heat and can have breathing difficulties, so air-conditioning and avoiding strenuous exercise in warm weather is essential. Bulldogs are stubborn but respond well to patient, reward-based training. Their facial wrinkles need regular cleaning to prevent skin infections. Best suited for apartment dwellers, seniors, families with young children, and anyone seeking a calm, loving companion.`,
  },
];

const BreedCarousel = () => {
  const [selectedBreed, setSelectedBreed] = useState<typeof breeds[0] | null>(null);
  const doubled = [...breeds, ...breeds];

  return (
    <section className="border-t-2 border-foreground bg-secondary overflow-hidden py-8">
      <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-6">
        POPULAR BREEDS
      </h2>

      {/* Detail panel */}
      {selectedBreed && (
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <div className="border-2 border-foreground bg-card pixel-shadow flex flex-col md:flex-row gap-4 p-4">
            <div className="md:w-1/3 flex flex-col items-center gap-3">
              <img
                src={selectedBreed.img}
                alt={selectedBreed.name}
                className="w-40 h-40 md:w-52 md:h-52 object-contain"
                width={512}
                height={512}
              />
              <h3 className="font-display text-2xl text-foreground">{selectedBreed.name}</h3>
            </div>
            <div className="md:w-2/3 relative">
              <button
                onClick={() => setSelectedBreed(null)}
                className="absolute top-0 right-0 p-1 border-2 border-foreground bg-card hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="font-body text-sm text-foreground leading-relaxed pr-8">
                {selectedBreed.info}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="flex gap-6 animate-breed-scroll">
          {doubled.map((breed, i) => (
            <div
              key={`${breed.name}-${i}`}
              onClick={() => setSelectedBreed(breed)}
              className={`flex-shrink-0 w-32 md:w-40 border-2 border-foreground bg-card p-3 pixel-shadow-sm flex flex-col items-center gap-2 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer ${
                selectedBreed?.name === breed.name ? 'ring-2 ring-accent' : ''
              }`}
            >
              <img
                src={breed.img}
                alt={breed.name}
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
                loading="lazy"
                width={512}
                height={512}
              />
              <span className="font-display text-sm md:text-base text-foreground text-center leading-tight">
                {breed.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedCarousel;
