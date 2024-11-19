type PlanePoint = (Float, Float)

midpoint :: PlanePoint -> PlanePoint -> PlanePoint
midpoint (x1, y1) (x2, y2) = ((x1 + x2) / 2, (y1 + y2) / 2)

triangleVertices :: [PlanePoint]
triangleVertices = [(200, -150), (-200, -150), (0, 173)]

removeDuplicates :: Eq a => [a] -> [a]
removeDuplicates [] = []
removeDuplicates (x:xs) = x : removeDuplicates (filter (/= x) xs)

addMidpoint :: [PlanePoint] -> [PlanePoint]
addMidpoint [] = []
addMidpoint (p1:points) = removeDuplicates [midpoint p1 vertex | vertex <- triangleVertices] ++ addMidpoint points

repeatMidpoints :: [PlanePoint] -> Int -> [PlanePoint]
repeatMidpoints points 0 = points
repeatMidpoints points n = repeatMidpoints (points ++ addMidpoint points) (n - 1)

midpointForAnimate  :: [PlanePoint] -> Int -> [[PlanePoint]]
midpointForAnimate points n = [repeatMidpoints points k | k <- [1..n]]

main :: IO ()
main = do
    let midpoints = midpointForAnimate triangleVertices 8
    writeFile "output.txt" "Results:\n"
    appendFile "output.txt" (init (show midpoints) ++ "\n")