using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class ShoppingDB_Hadassah_Lugassi_project2025Context : DbContext
    {
        public ShoppingDB_Hadassah_Lugassi_project2025Context()
        {
        }

        public ShoppingDB_Hadassah_Lugassi_project2025Context(DbContextOptions<ShoppingDB_Hadassah_Lugassi_project2025Context> options)
            : base(options)
        {
        }

        public virtual DbSet<BayingDetailsTbl> BayingDetailsTbls { get; set; } = null!;
        public virtual DbSet<BayingTbl> BayingTbls { get; set; } = null!;
        public virtual DbSet<CategoryTbl> CategoryTbls { get; set; } = null!;
        public virtual DbSet<CustomersTbl> CustomersTbls { get; set; } = null!;
        public virtual DbSet<GamesTbl> GamesTbls { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-6F0MN7B;Database=ShoppingDB_Hadassah_Lugassi_project2025;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("Hebrew_100_CI_AS");

            modelBuilder.Entity<BayingDetailsTbl>(entity =>
            {
                entity.HasKey(e => e.BayingDetailsId)
                    .HasName("PK__BayingDe__A14694FA4437AE06");

                entity.ToTable("BayingDetailsTbl");

                entity.Property(e => e.BayingDetailsId).HasColumnName("BayingDetailsID");

                entity.Property(e => e.BayingId).HasColumnName("BayingID");

                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.HasOne(d => d.Baying)
                    .WithMany(p => p.BayingDetailsTbls)
                    .HasForeignKey(d => d.BayingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BayingDet__Bayin__4D2A7347");

                entity.HasOne(d => d.Game)
                    .WithMany(p => p.BayingDetailsTbls)
                    .HasForeignKey(d => d.GameId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BayingDet__GameI__4E1E9780");
            });

            modelBuilder.Entity<BayingTbl>(entity =>
            {
                entity.HasKey(e => e.BayingId)
                    .HasName("PK__BayingTb__E1C5950C8C6D0FA4");

                entity.ToTable("BayingTbl");

                entity.Property(e => e.BayingId).HasColumnName("BayingID");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.DateOfBaying).HasColumnType("date");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.BayingTbls)
                    .HasForeignKey(d => d.CustId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BayingTbl__CustI__4A4E069C");
            });

            modelBuilder.Entity<CategoryTbl>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__Category__19093A2BBB9E8DF8");

                entity.ToTable("CategoryTbl");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomersTbl>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A8970A1D8E9");

                entity.ToTable("CustomersTbl");

                entity.HasIndex(e => e.CustPass, "UQ__Customer__EBFF2F4D44ED4786")
                    .IsUnique();

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CreditDetails)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.CustPass)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GamesTbl>(entity =>
            {
                entity.HasKey(e => e.GamesId)
                    .HasName("PK__GamesTbl__B4B95DFDE1A44348");

                entity.ToTable("GamesTbl");

                entity.Property(e => e.GamesId).HasColumnName("GamesID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.GamesName)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Img)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.GamesTbls)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GamesTbl__Catego__44952D46");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
