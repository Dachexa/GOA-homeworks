/*  create 5 folders */

for (let i = 1; i <= 5; i++) {
  mkdir(`./folder1_${i}/`);
  mkdir(`./folder2_${i}/`);
  mkdir(`./folder3_${i}/`);
  mkdir(`./folder4_${i}/`);
  mkdir(`./folder5_${i}/`);
}
