import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import resenas from "./resenas.module.css";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function Resenas() {
  return (
    <>
      <div className={resenas.resenas}>
        <h2>Reseñas de nuestros clientes</h2>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: "100%",
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {data.map((item) => (
            <Card
              row
              key={item.title}
              variant="outlined"
              sx={{
                gap: 2,
                border: 1,
                "--Card-padding": (theme) => theme.spacing(2),
              }}
            >
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 60, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                />
              </AspectRatio>
              <Box sx={{ whiteSpace: "nowrap", color: "#000" }}>
                <Typography fontWeight="md">{item.title}</Typography>
                <Typography level="body2">{item.description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
}
